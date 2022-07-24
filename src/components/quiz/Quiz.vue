<script>
export default defineComponent({
  created() {
    ;(function (i, s, o, g, r, a, m) {
      var ql = document.querySelectorAll(
        'DIV[quiz],DIV[quiz],DIV[data-quiz],DIV[data-quiz]'
      )
      if (ql) {
        if (ql.length) {
          for (var k = 0; k < ql.length; k++) {
            ql[k].id = 'quiz-embed-' + k
            ql[k].href =
              "javascript:var i=document.getElementById('quiz-embed-" +
              k +
              "');try{qz.startQuiz(i)}catch(e){i.start=1;i.style.cursor='wait';i.style.opacity='0.5'};void(0);"
          }
        }
      }
      i['QP'] = r
      ;(i[r] =
        i[r] ||
        function () {
          ;(i[r].q = i[r].q || []).push(arguments)
        }),
        (i[r].l = 1 * new Date())
      ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(
      window,
      document,
      'script',
      'https://take.quiz-maker.com/3012/CDN/quiz-embed-v1.js',
      'qp'
    )
  },
})
</script>

<template>
  <div>
    <div
      data-quiz="QP2NYQNFW"
      data-type="4"
      href="https://take.quiz-maker.com/QP2NYQNFW"
    >
      <!-- Loading... -->
    </div>
  </div>
</template>
