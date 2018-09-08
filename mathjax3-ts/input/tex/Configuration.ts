/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * @fileoverview Configuration options for the TexParser.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import {ParseMethod} from './Types.js';
import ParseMethods from './ParseMethods.js';
import {ExtensionMaps, HandlerType} from './MapHandler.js';
import {StackItemClass} from './StackItem.js';
import {TagsClass} from './Tags.js';
import {MmlNode} from '../../core/MmlTree/MmlNode.js';
import {defaultOptions, OptionList} from '../../util/Options.js';
import ParseOptions from './ParseOptions.js';
import *  as sm from './SymbolMap.js';


export type HandlerConfig = {[P in HandlerType]?: string[]}
export type FallbackConfig = {[P in HandlerType]?: ParseMethod}
export type StackItemConfig = {[kind: string]: StackItemClass}
export type TagsConfig = {[kind: string]: TagsClass}


export class Configuration {

  /**
   * Creates a configuration for a package.
   * @param {string} name The package name.
   * @param {Object} config The configuration parameters:
   * Configuration for the TexParser consist of the following:
   *  * _handler_  configuration mapping handler types to lists of symbol mappings.
   *  * _fallback_ configuration mapping handler types to fallback methods.
   *  * _items_ for the StackItem factory.
   *  * _tags_ mapping tagging configurations to tagging objects.
   *  * _options_ parse options for the packages.
   *  * _nodes_ for the Node factory.
   *  * _preprocessors_ list of functions for preprocessing the LaTeX
   *      string wrt. to given parse options.
   *  * _postprocessors_ list of functions for postprocessing the MmlNode
   *      wrt. to given parse options.
   * @return {Configuration} The newly generated configuration.
   */
  public static create(name: string,
                       config: {handler?: HandlerConfig,
                                fallback?: FallbackConfig,
                                items?: StackItemConfig,
                                tags?: TagsConfig,
                                options?: OptionList,
                                nodes?: {[key: string]: any},
                                preprocessors?: ((input: string, options: ParseOptions) => string)[],
                                postprocessors?: ((input: MmlNode, options: ParseOptions) => void)[]
                               } = {}) {
    return new Configuration(name,
                             config.handler || {},
                             config.fallback || {},
                             config.items || {},
                             config.tags || {},
                             config.options || {},
                             config.nodes || {},
                             config.preprocessors || [],
                             config.postprocessors || []
                            );
  }


  /**
   * An empty configuration.
   */
  public static empty(): Configuration {
    return Configuration.create('empty');
  };


  /**
   * Initialises extension maps.
   */
  public static extension(): Configuration {
    new sm.MacroMap(ExtensionMaps.NEW_MACRO, {}, {});
    new sm.DelimiterMap(ExtensionMaps.NEW_DELIMITER,
                        ParseMethods.delimiter, {});
    new sm.CommandMap(ExtensionMaps.NEW_COMMAND, {}, {});
    new sm.EnvironmentMap(ExtensionMaps.NEW_ENVIRONMENT,
                          ParseMethods.environment, {}, {});
    return Configuration.create(
      'extension',
      {handler: {character: [],
                 delimiter: [ExtensionMaps.NEW_DELIMITER],
                 macro: [ExtensionMaps.NEW_DELIMITER,
                         ExtensionMaps.NEW_COMMAND,
                         ExtensionMaps.NEW_MACRO],
                 environment: [ExtensionMaps.NEW_ENVIRONMENT]
                }});
  };


  /**
   * Appends configurations to this configuration. Note that fallbacks are
   * overwritten.
   *
   * @param {Configuration} configuration A configuration setting for the TeX
   *       parser.
   */
  public append(config: Configuration): void {
    let handlers = Object.keys(config.handler) as HandlerType[];
    for (const key of handlers) {
      for (const map of config.handler[key]) {
        this.handler[key].unshift(map);
      }
    }
    handlers = Object.keys(config.fallback) as HandlerType[];
    Object.assign(this.fallback, config.fallback);
    Object.assign(this.items, config.items);
    Object.assign(this.tags, config.tags);
    defaultOptions(this.options, config.options);
    Object.assign(this.nodes, config.nodes);
    this.preprocessors = this.preprocessors.concat(config.preprocessors);
    this.postprocessors = this.postprocessors.concat(config.postprocessors);
  }


  /**
   * @constructor
   */
  private constructor(readonly name: string,
                      readonly handler: HandlerConfig = {},
                      readonly fallback: FallbackConfig = {},
                      readonly items: StackItemConfig = {},
                      readonly tags: TagsConfig = {},
                      readonly options: OptionList = {},
                      readonly nodes: {[key: string]: any} = {},
                      public preprocessors: ((input: string, options: ParseOptions) => string)[] = [],
                      public postprocessors: ((input: MmlNode, options: ParseOptions) => void)[] = []
             ) {
    let _default: HandlerConfig = {character: [], delimiter: [], macro: [], environment: []};
    let handlers = Object.keys(handler) as HandlerType[];
    for (const key of handlers) {
      _default[key] = handler[key];
    }
    this.handler = _default;
    ConfigurationHandler.set(name, this);
  }

};


export namespace ConfigurationHandler {

  let maps: Map<string, Configuration> = new Map();

  /**
   * Adds a new configuration to the handler overwriting old ones.
   *
   * @param {SymbolConfiguration} map Registers a new symbol map.
   */
  export let set = function(name: string, map: Configuration): void {
    maps.set(name, map);
  };


  /**
   * Looks up a configuration.
   *
   * @param {string} name The name of the configuration.
   * @return {SymbolConfiguration} The configuration with the given name or null.
   */
  export let get = function(name: string): Configuration {
    return maps.get(name);
  };

  /**
   * @return {string[]} All configurations in the handler.
   */
  export let keys = function(): IterableIterator<string> {
    return maps.keys();
  };

}

