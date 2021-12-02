import React from 'react'
import { Pie } from 'react-chartjs-2'
import './basic.css';



class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      data: [],
      data1: [],
      data2: []
    }
  }
  componentDidMount() {
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

  render() {
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
    

    

    var options = {
      legend: {
        // responsive: true,
        maintainAspectRatio: false,
        // scaleShowValues: true,
        position: 'chartArea',
        // display:false,
        labels: {
          boxWidth: 10
        }
      },
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
              autoSkip: false
            }
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
        <div>
          <Pie data={pieData} options={options} />
        </div>
      )
    }
  }
}
export default Chart;