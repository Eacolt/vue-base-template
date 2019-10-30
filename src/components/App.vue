<template>
  <div id="app">
    <div :style="bgstyle">{{aaa}}</div>
    <div id="game"></div>
  </div>
</template>
<script>
import * as PIXI from "pixi.js";
import 'pixi-spine'
import Axios from "axios";
var PixiApp;
export default {
  data() {
    return {
      aaa: "helloworld",

      bgstyle: {
        position: "relative",
        width: "100%",
        height: "100%",
        background: `url("${process.env.baseURL}/img/HomeBg.jpg") no-repeat`,
        backgroundSize: "cover"
      }
    };
  },
  mounted() {
    this.aaa = this.$store.state.aaa;
    console.log(PIXI);
    this.gamestart().then(() => {
      var monster = new PIXI.spine.Spine(
        PIXI.loader.resources["monster"].spineData
      );
      PixiApp.stage.addChild(monster);
      monster.x = 1920 / 2;
      monster.y = 1080 / 2;
      monster.state.setAnimation(0, "standing", true);
    console.log(PIXI.loader.resources)
    });
  },
  methods: {
    async gamestart() {
      await this.initCanvas();
      await this.initLoader();
    },
    initLoader() {
      return new Promise(resolve => {
        Axios.get("json/resource.json").then(data => {

                console.log('ddd',data.data)
          PIXI.loader.add(data.data).load(() => {
          
            resolve();
          });
        });
      });
    },
    initCanvas() {
      return new Promise(resolve => {
        PixiApp = new PIXI.Application({
          width: 1920,
          height: 1080,
          transparent: true
        });
        PixiApp.view.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;`;

        document.getElementById("game").appendChild(PixiApp.view);
        resolve();
      });
    }
  }
};
</script>
<style scope>
#app {
  position: absolute;
  width: 19.2rem;
  height: 10.8rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  background: gray;
  top: 50%;
  transform: translate(0, -50%);
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
</style>

