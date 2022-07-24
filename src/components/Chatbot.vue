<template>
  <div class="chatbot-container">
    <div id="myForm" class="chat-popup">
      <form action="/action_page.php" class="form-container">
        <iframe
          src="https://webchat.botframework.com/embed/chatbotforeducapp-bot?s=SRi4RSjtzvw.z90A0Txk7Hf2UVcMqfF2vfpQoB3MAQrNvktAuD5o-W8"
          height="300px"
        ></iframe>
        <!-- <iframe src='https://webchat.botframework.com/embed/chatbotforeducapp-bot?s=YOUR_SECRET_HERE'  style='min-width: 400px; width: 100%; min-height: 500px;'></iframe>
         -->
      </form>
    </div>

    <div class="help-container">
      <img
        class="help-img cancel"
        src="/imgs/chatbot.png"
        alt=""
        :onclick="closeForm"
      />>
      <p class="help-text" :onclick="closeForm">Necesitas ayuda?</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById('myForm').style.visibility = 'hidden'
  },
  methods: {
    closeForm: function () {
      if (document.getElementById('myForm').style.visibility == 'hidden') {
        console.log('Entre 1')
        document.getElementById('myForm').style.visibility = 'visible'
      } else {
        console.log('Entre 2')
        document.getElementById('myForm').style.visibility = 'hidden'
      }
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.chatbot-container {
  width: 320px;
  position: fixed;
  right: 40px;
  bottom: 40px;
}

.myForm {
  visibility: hidden;
}
/* Add styles to the form container */
.form-container {
  width: auto;
  background-color: white;
  border-radius: 25px !important;
}

/* Set a style for the submit/login button */

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}

.help-container {
  max-width: 300px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
}

.chat-popup {
  width: 300px;
  bottom: 10px;
  position: relative;
}

.help-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px black solid;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  right: -20px;
}

iframe {
  border-radius: 25px !important;
}

.help-text {
  /* font-size: 1.5rem; */
  font-weight: bold;
  border: 1px black solid;
  padding: 0.5rem !important;
  padding-left: 1rem !important;
  padding-left: 1.5rem !important;
  border-radius: 0 1rem 1rem 0;
  cursor: pointer;
  margin: 0;
  font-size: 1.6rem;
  background-color: #fff;
}

.help-text::selection {
  background: none;
}
</style>
