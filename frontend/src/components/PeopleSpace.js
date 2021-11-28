import React from 'react'
import { Typography } from '@mui/material'
class PeopleSpace extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount() {
    const url = 'http://api.open-notify.org/astros'
    fetch(url)
      .then(response => response.json())
      .then(res => {
        let groupBy = function (xs, key) {
          return xs.reduce(function (rv, x) {
            ; (rv[x[key]] = rv[x[key]] || []).push(x)
            return rv
          }, {})
        }

        let groubedByExchange = groupBy(res.people, 'craft')
        this.setState({ data: groubedByExchange })
      })
      .catch(err => alert('Error Found'))
    this.setState({ loading: false })
  }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }
    const keys = Object.keys(this?.state?.data)
    const key1 = keys[0]
    const key2 = keys[1]
    return (
      <div>
        <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center',marginTop:-2 }} variant="h5" >
          People in space today
        </Typography>
        <div style={{ display: 'flex', paddingTop: '10px', color: 'white' }}>
          <div>
            <table>
              <thead>
                <th style={{ border: '1px solid #777777', padding: 2, width: '190px', fontWeight: 'bold' }}>
                  {key1}
                </th>
              </thead>
              <tbody>
                {this?.state?.data[key1]?.map(d => {
                  return (
                    <tr style={{ border: '1px solid #777777', padding: 2 }}>
                      <td style={{ border: '1px solid #777777', padding: 2, width: '200px', }}>{d.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <th style={{ border: '1px solid #777777', padding: 2, width: '190px', fontWeight: 'bold' }}>
                  {key2}
                </th>
              </thead>
              <tbody>
                {this?.state?.data[key2]?.map(d => {
                  return (
                    <tr style={{ border: '1px solid #777777', padding: 2 }}>
                      <td style={{ border: '1px solid #777777', padding: 2 }}>{d.name}</td>
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