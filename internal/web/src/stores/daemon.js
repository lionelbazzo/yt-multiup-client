/*
 * Copyright (c) 2022 Michaël COLL.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineStore } from "pinia";

export const useDaemonStore = defineStore("daemon", {
  state: () => {
    return { id: "", name: "No active daemon" };
  },
  actions: {
    useDaemon(id, name) {
      this.id = id;
      this.name = name;
    },
    clearDaemon() {
      this.id = "";
      this.name = "No active daemon";
    },
  },
  getters: {
    hasActiveDaemon() {
      return this.id !== "";
    },
  },
});
