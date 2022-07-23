<template lang="">
  <div>
    <navbar
      link1="/profesores/comunidad"
      name1="Comunidad"
      link2="agenda"
      name2="Agenda"
      link3="./"
      link4="/profesores/analiticas"
      name4="Analíticas"
      link5="/profesores"
      name5="Mis Cursos"
    ></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="fs-1">Mis analíticas</div>
          <div id="pieChart" style="height: 360px; width: 100%"></div>
        </div>
        <div class="col-md-6">
          <div id="columnChart" style="height: 360px; width: 100%"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default defineComponent({
  created() {
    this.loadScript(
      'https://canvasjs.com/assets/script/canvasjs.min.js',
      () => {
        if (!CanvasJS) throw new Error('CanvasJS not loaded')

        var pieChartValues = [
          {
            y: 39.16,
            exploded: true,
            indexLabel: 'Matemáticas',
            color: '#1f77b4',
          },
          {
            y: 21.8,
            indexLabel: 'Español',
            color: '#ff7f0e',
          },
          {
            y: 21.45,
            indexLabel: 'Historia',
            color: ' #ffbb78',
          },
          {
            y: 5.56,
            indexLabel: 'Geografía',
            color: '#d62728',
          },
          {
            y: 5.38,
            indexLabel: 'Civismo',
            color: '#98df8a',
          },
          {
            y: 3.73,
            indexLabel: 'Inglés',
            color: '#bcbd22',
          },
          {
            y: 2.92,
            indexLabel: 'Otras',
            color: '#f7b6d2',
          },
        ]
        renderPieChart(pieChartValues)

        function renderPieChart(values) {
          var chart = new CanvasJS.Chart('pieChart', {
            backgroundColor: 'white',
            colorSet: 'colorSet2',

            title: {
              text: 'Rendimiento en Materias',
              fontFamily: 'Verdana',
              fontSize: 25,
              fontWeight: 'normal',
            },
            animationEnabled: true,
            data: [
              {
                indexLabelFontSize: 15,
                indexLabelFontFamily: 'Monospace',
                indexLabelFontColor: 'darkgrey',
                indexLabelLineColor: 'darkgrey',
                indexLabelPlacement: 'outside',
                type: 'pie',
                showInLegend: false,
                toolTipContent: '<strong>#percent%</strong>',
                dataPoints: values,
              },
            ],
          })
          chart.render()
        }
        var columnChartValues = [
          {
            y: 686.04,
            label: 'Patricio',
            color: '#1f77b4',
          },
          {
            y: 381.84,
            label: 'Mónica',
            color: '#ff7f0e',
          },
          {
            y: 375.76,
            label: 'Cecilia',
            color: ' #ffbb78',
          },
          {
            y: 97.48,
            label: 'Lizbeth',
            color: '#d62728',
          },
          {
            y: 94.2,
            label: 'Maximiliano',
            color: '#98df8a',
          },
          {
            y: 65.28,
            label: 'Monserrat',
            color: '#bcbd22',
          },
          {
            y: 51.2,
            label: 'Raquel',
            color: '#f7b6d2',
          },
        ]
        renderColumnChart(columnChartValues)

        function renderColumnChart(values) {
          var chart = new CanvasJS.Chart('columnChart', {
            backgroundColor: 'white',
            colorSet: 'colorSet3',
            title: {
              text: 'Rendimiento de mis alumnos',
              fontFamily: 'Verdana',
              fontSize: 25,
              fontWeight: 'normal',
            },
            animationEnabled: true,
            legend: {
              verticalAlign: 'bottom',
              horizontalAlign: 'center',
            },
            theme: 'theme2',
            data: [
              {
                indexLabelFontSize: 15,
                indexLabelFontFamily: 'Monospace',
                indexLabelFontColor: 'darkgrey',
                indexLabelLineColor: 'darkgrey',
                indexLabelPlacement: 'outside',
                type: 'column',
                showInLegend: false,
                legendMarkerColor: 'grey',
                dataPoints: values,
              },
            ],
          })

          chart.render()
        }
      }
    )
  },
  methods: {
    loadScript(src, cb) {
      const scriptEl = document.createElement('script')
      scriptEl.src = src
      scriptEl.async = 1
      document.querySelector('head').appendChild(scriptEl)
      scriptEl.addEventListener('load', cb)
    },
  },
})
</script>
<style lang=""></style>
