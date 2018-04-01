<template>
<div id="Quiz">
  <div class="container">
    <div class="form">
      <div class="row">
        <p class="question">{{ quizData[qIndex].q }}<span class="Q-message" v-show="message">{{ message }}</span></p>
        <img :src="correct ? '/static/check.svg' : '/static/no.svg'" :class="checked ? 'Q-img' : 'Q-img inv'"/>
      </div>
      <hr />
      <div class="ans-list">
        <div v-for="(ans, index) in quizData[qIndex].pAns" :key="`${index}qform`" v-on:click="select(index)" class="ans">
          <div :class="`check ${index === selected ? 'fill' : ''}`"></div>
          <input type="radio" :checked="index === selected" />
          <span :class="`ans ${checked ? (quizData[qIndex].ansIndex === index ? 'green' : 'red') : ''}`">
            {{ ans }}
          </span>
        </div>
      </div>
      <div class="row">
        <button class="btn" v-on:click="check()">Check</button>
        <button class="btn" v-on:click="change()">Change question</button>
      </div>
      <div class="bars">
        <div
          v-for="(o, index) in quizData" :key="`${index}qformBar`"
          :class="`bar ${index === qIndex ? 'selected' : ''}`"
          v-on:click="change(index)">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const quizData = [
  {
    q: 'Who is responsible for Food Waste?',
    pAns: [
      'Transportation staff',
      'Farmers & Landowners',
      'Consumers & Retailers',
      'External Factors'
    ],
    ansIndex: 2,
    explanation: `
    
    `
  },
  {
    q: 'How much food is wasted or lost in America each year?',
    pAns: [
      '126 Billion pounds',
      '14 Billion pounds',
      '53 Billion pounds',
      '27 Billion pounds'
    ],
    ansIndex: 0,
    explanation: `
    
    `
  },
  {
    q: 'Who gets affected by Food Waste & Food Loss?',
    pAns: ['The Poor', 'The entire world', 'The Business', 'The customer'],
    ansIndex: 1,
    explanation: `
    
    `
  },
  {
    q: 'How can one help?',
    pAns: [
      'Donating/eating the food we buy',
      'Being a little bit less picky with food',
      'Spreading the message',
      'Any of the above'
    ],
    ansIndex: 3,
    explanation: `
    
    `
  }
]
export default {
  name: 'Qform',
  data () {
    return {
      quizData,
      qIndex: 0,
      selected: undefined,
      message: '',
      checked: false,
      correct: false
    }
  },
  methods: {
    select (index) {
      this.selected = index
    },
    check () {
      if (this.selected || this.selected === 0) {
        this.message = ''
        this.checked = true
        this.correct = this.quizData[this.qIndex].ansIndex === this.selected
      } else {
        this.message = 'Select an answer'
      }
    },
    change (index) {
      if (index || index === 0) {
        this.qIndex = index
      } else {
        let newIndex = this.qIndex
        while (newIndex === this.qIndex) {
          newIndex = Math.floor(Math.random() * 4)
        }
        this.qIndex = newIndex
      }
      this.checked = false
      this.selected = undefined
      this.message = ''
    }
  }
}
</script>
