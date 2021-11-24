import React from 'react'

class PeopleSpace extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount () {
    const url = 'http://api.open-notify.org/astros'
    fetch(url)
      .then(response => response.json())
      .then(res => {
        let groupBy = function (xs, key) {
          return xs.reduce(function (rv, x) {
            ;(rv[x[key]] = rv[x[key]] || []).push(x)
            return rv
          }, {})
        }

        let groubedByExchange = groupBy(res.people, 'craft')
        this.setState({ data: groubedByExchange })
      })
      .catch(err => alert('Error Found'))
    this.setState({ loading: false })
  }
  render () {
    if (this.state.loading) {
      return <div>loading...</div>
    }
    const keys = Object.keys(this?.state?.data)
    const key1 = keys[0]
    const key2 = keys[1]
    return (
      <div style={{ margin: '100px' }}>
        <h3 style={{ padding: '10px' }}>
          there are 10 people in the space now
        </h3>
        <div style={{ display: 'flex', paddingTop: '10px' }}>
          <div>
            <table>
              <thead>
                <th style={{ border: '1px solid black ', width: '170px' }}>
                  {key1}
                </th>
              </thead>
              <tbody>
                {this?.state?.data[key1]?.map(d => {
                  return (
                    <tr style={{ border: '1px solid black ' }}>
                      <td style={{ border: '1px solid black ' }}>{d.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <th style={{ border: '1px solid black ', width: '170px' }}>
                  {key2}
                </th>
              </thead>
              <tbody>
                {this?.state?.data[key2]?.map(d => {
                  return (
                    <tr style={{ border: '1px solid black ' }}>
                      <td style={{ border: '1px solid black ' }}>{d.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default PeopleSpace