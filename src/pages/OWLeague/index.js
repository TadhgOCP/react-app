import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';



export function OWLeague() {

  const [rankings, setrankings] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/rankings`)
    .then((response) => response.json())
    .then((data) => {
      const filteredList = filterByRanking(data)
      setrankings(filteredList)
      console.log(data)
    })
  }, [])

  const filterByRanking = (list) => {
    return list.filter((item, index) => {
      if (index < 10) return true
    })
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        {
          rankings.map((item, index) => {
            return (
              <tr>
                <td>{ index + 1}</td>
                <td style={{ textAlign: 'left' }}> <img height="50px" width="50px" src={ item.img }></img>{ item.name }</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  );
}
// { name: 'something', img: 'http:/...' }
