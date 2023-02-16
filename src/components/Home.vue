<template>
    <div class="jumbotron">
      <h1 class="display-4">typing app</h1>
      <p class="lead"></p>
      <hr class="my-4">
      <div class="d-flex justify-content-center spaceitem">
        <p v-for="(item, key) in words.filter((data,index) => index < 20)" :key="key">{{ item }}</p>
      </div>
      <hr class="my-4">
      <div class="d-flex justify-content-center align-items-center dflexitems">
        <input v-model="word" @keyup="meanFunc" type="text">
        <span>{{ meanTimer }}</span>
        <button @click="showWords" class="btn btn-primary">yenile</button>
      </div>
    </div>
    <Result @some-event="returningVal = !returningVal" :returningVal="returningVal" :showWords="showWords" :trueScore="trueScore" :falseScore="falseScore" v-if="returningVal"></Result>
  </template>
  
  <script>
  import Result from "./Result.vue"
  import words from "@/assets/words.json"
  export default {
    components : {
        Result
    },
    data() {
      return {
        words: [],
        word: null,
        isTrue: true,
        trueScore: 0,
        falseScore: 0,
        maxWords : 300,
        meanTimer: 60,
        isRunning: false,
        returningVal : false
      }
    },
    methods: {
      meanFunc(e) {
  
        if(!this.isRunning){
  
          let timer = setInterval(()=> {
            this.meanTimer--;
  
            if(this.meanTimer == 0) {
            clearInterval(timer)
            this.returningVal = !this.returningVal
          }
          },1000)
  
         
        }
  
        this.isRunning = true
  
        let meanWord = this.words[0]
        if (e.code == "Space") {
  
          let trimWord = e.target.value.trim()
  
          if (trimWord == meanWord) {
            this.trueScore++
            this.words.splice(0, 1)
            this.word = null
          }
          else if (trimWord !== meanWord) {
            this.falseScore++
            this.words.splice(0, 1)
            this.word = null
          }
        }
      },
      showWords() {
        console.log("afafaf")
        this.words = [];
        for (let index = 0; index < this.maxWords; index++) {
          let randomNumber = Math.floor(Math.random() * 60000)
          this.words.push(words[randomNumber])
        }
      }
    },
    mounted() {
      this.showWords();
    },
   
  
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .dflexitems>* {
    margin: 0px 10px;
  }
  
  .spaceitem {
    flex-wrap: wrap;
  }
  
  .spaceitem>p {
    margin: 0px 5px;
  }
  </style>
  