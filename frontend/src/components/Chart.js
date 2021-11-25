import React from 'react'
import { Pie } from 'react-chartjs-2'

class Chart extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      data: [],
      data1: [],
      data2: []
    }
  }
  componentDidMount () {
    fetch(
      'https://ll.thespacedevs.com/2.0.0/launch/?format=json&offset=10&ordering=-net'
    )
      .then(response => response.json())
      .then(res => {
        this.setState({ data: res.results })
      })
      .catch(err => alert('Error Found'))
    fetch(
      'https://ll.thespacedevs.com/2.0.0/launch/?format=json&offset=6460&ordering=-net'
    )
      .then(response => response.json())
      .then(res => {
        this.setState({ data1: res.results })
      })
      .catch(err => alert('Error Found'))
    fetch(
      'https://ll.thespacedevs.com/2.0.0/launch/?format=json&offset=6450&ordering=-net'
    )
      .then(response => response.json())
      .then(res => {
        this.setState({ data2: res.results })
      })
      .catch(err => alert('Error Found'))

    this.setState({ loading: false })
  }

  render () {
    const datta = [
      ...(this?.state?.data ? this?.state?.data : []),
      ...(this?.state?.data1 ? this?.state?.data1 : []),
      ...(this?.state?.data2 ? this?.state?.data2 : [])
    ]
    const counts = {}
    datta.forEach(r => {
      counts[r.launch_service_provider['name']] =
        (counts[r.launch_service_provider['name']] || 0) + 1
    })
    console.log('count', counts)
    var colorArray = [
      '#FF6633',
      '#FFB399',
      '#FF33FF',
      '#FFFF99',
      '#00B3E6',
      '#E6B333',
      '#3366E6',
      '#999966',
      '#99FF99',
      '#B34D4D',
      '#80B300',
      '#809900',
      '#E6B3B3',
      '#6680B3',
      '#66991A',
      '#FF99E6',
      '#CCFF1A',
      '#FF1A66',
      '#E6331A',
      '#33FFCC',
      '#66994D',
      '#B366CC',
      '#4D8000',
      '#B33300',
      '#CC80CC',
      '#66664D',
      '#991AFF',
      '#E666FF',
      '#4DB3FF',
      '#1AB399',
      '#E666B3',
      '#33991A',
      '#CC9999',
      '#B3B31A',
      '#00E680',
      '#4D8066',
      '#809980',
      '#E6FF80',
      '#1AFF33',
      '#999933',
      '#FF3380',
      '#CCCC00',
      '#66E64D',
      '#4D80CC',
      '#9900B3',
      '#E64D66',
      '#4DB380',
      '#FF4D4D',
      '#99E6E6',
      '#6666FF'
    ]
    const data = {
      labels: [
        '01/01/2019',
        '02/01/2019',
        '03/01/2019',
        '04/01/2019',
        '05/01/2019',
        '06/01/2019',
        '07/01/2019'
      ],

      datasets: [
        {
          label: 'HSN',
          fill: false,
          borderColor: 'rgba(255, 0, 0, 0.3)',
          borderWidth: 1,
          pointRadius: 2,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'CPX',
          fill: false,
          borderColor: 'rgba(0, 255, 0, 0.3)',
          borderWidth: 1,
          pointRadius: 2,
          data: [70, 32, 45, 65, 87, 92, 99]
        },
        {
          label: 'Total',
          fill: false,
          borderColor: 'blue',
          borderWidth: 2,
          pointRadius: 2,
          data: [135, 91, 125, 144, 143, 143, 139]
        }
      ]
    }

    var options = {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 10
        }
      },
      scales: {
        xAxes: [
          {
            ticks: { display: false }
          }
        ]
      }
    }

    const pieData = {
      labels: Object.keys(counts),
      datasets: [
        {
          data: Object.values(counts),
          backgroundColor: colorArray
        }
      ]
    }
    if (this.state.loading) {
      return <div>loading...</div>
    } else {
      return (
        <div style={{ height: '800px', width: '800px' }}>
          <Pie data={pieData} options={options} />
        </div>
      )
    }
  }
}
export default Chart