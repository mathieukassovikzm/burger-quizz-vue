<template lang="html" src="./Questions.html"></template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

  data(){
    return {
      questionId: null,
      question: null,
      showAnswer: false
    }
  },
  computed: {
    ...mapGetters('questionsStore',{
      getQuestionById: 'getQuestionInStore',
    }),

    getQuestion(){
      if (this.question != null)
        return this.question.question ;
      else
        return ""
    },
    getRep1(){
      if (this.question != null)
        return this.question.reponses.rep1 ;
      else
        return ""
    },
    getRep2(){
      if (this.question != null)
        return this.question.reponses.rep2 ;
      else
        return ""
    },
    getRep3(){
      if (this.question != null)
        return this.question.reponses.rep3 ;
      else
        return ""
    },
    getRep4(){
      if (this.question != null)
        return this.question.reponses.rep4 ;
      else
        return ""
    },
    getGoodAnswers(){
      return this.showAnswer === true ? this.question.goodrep : "";
    }
    /*,
    questionMayo(){
      //return team == "mayo" ? true : false
    },
    questionKetchup(){
      //return team == "ketchup" ? true : false
    }*/
  },
  methods:{
    ...mapActions('questionsStore', {
      inCrementCountQuestion: 'incrementCountQuestionInStore',
    }),
    showReponse(){
      this.showAnswer = true;
    },
    fetchQuestion(nb){
      this.question = this.getQuestionById(nb)
    },
    nextQuestion(){
      this.inCrementCountQuestion();
      this.$router.push({name:'screenQuestion', params:{id: parseInt( this.questionId )+ 1}})
    }
  },
  created(){
    this.questionId = this.$route.params.id;
    this.fetchQuestion(this.questionId);
  },
}

</script>

<style lang="scss" src="./Questions.scss"></style>
