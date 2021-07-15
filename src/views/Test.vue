<template>
    <div>
        <div ref="content" id="content" style="height: 100vh"></div>
    </div>
</template>

<script>
import Vue from "vue";
import App from '../App.vue'

import DiagramEditor, {
    ControllerItem,
    MenubarItem,
} from "../diagram_editor/diagram-editor.es";
import "../diagram_editor/style.css";

export default {
    data() {
        return {};
    },
    mounted() {
        //节点
        const node = {
            width: 80,
            height: 42,
            attrs: {
                body: {
                    stroke: "#5F95FF",
                    strokeWidth: 1,
                    fill: "rgba(95,149,255,0.05)",
                },
                fo: {
                    refWidth: "100%",
                    refHeight: "100%",
                },
                text: {
                    fontSize: 12,
                    fill: "rgba(0,0,0,0.85)",
                },
            },
            ports: {
                groups: {
                    top: {
                        position: "top",
                        attrs: {
                            circle: {
                                r: 3,
                                magnet: true,
                                stroke: "#5F95FF",
                                strokeWidth: 1,
                                fill: "#fff",
                            },
                        },
                    },
                    right: {
                        position: "right",
                        attrs: {
                            circle: {
                                r: 3,
                                magnet: true,
                                stroke: "#5F95FF",
                                strokeWidth: 1,
                                fill: "#fff",
                            },
                        },
                    },
                    bottom: {
                        position: "bottom",
                        attrs: {
                            circle: {
                                r: 3,
                                magnet: true,
                                stroke: "#5F95FF",
                                strokeWidth: 1,
                                fill: "#fff",
                            },
                        },
                    },
                    left: {
                        position: "left",
                        attrs: {
                            circle: {
                                r: 3,
                                magnet: true,
                                stroke: "#5F95FF",
                                strokeWidth: 1,
                                fill: "#fff",
                            },
                        },
                    },
                },
                items: [
                    {
                        group: "top",
                    },
                    {
                        group: "right",
                    },
                    {
                        group: "bottom",
                    },
                    {
                        group: "left",
                    },
                ],
            },
        };
        //
        const editor = new DiagramEditor();
        console.log(editor);

        //1,controller,exporter
        class E extends ControllerItem {
            constructor() {
                super();
                this.title = "画布属性";
            }
            mount(container) {
                // let d = document.createElement("div");
                // container.appendChild(d);
                console.log("app",App);
                new Vue({
                    render: (h) => h(App),
                }).$mount(container);
            }
            unmount() {}
            activate() {
                return true;
            }
        }
        const e = new E();
        const e2 = new E();
        editor.controller.load("e", e);
        editor.controller.load("e2", e2);

        //2.
        const m = new MenubarItem({ text: "menu1" });
        editor.menubar.load("m", m);
        const m2 = new MenubarItem({ text: "menu2" });
        editor.menubar.load("m2", m2);
        const m21 = new MenubarItem({ text: "menu21" });
        //id,e,pid
        editor.menubar.load("m21", m21, "m2");

        setTimeout(() => {
            editor.mount("#content");
        }, 1000);
    },
};
</script>

<style scoped>
</style>