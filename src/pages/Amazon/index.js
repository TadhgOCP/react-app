import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';



export function Amazon() {

  const [amazon, setAmazon] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/amazon`)
    .then((response) => response.json())
    .then((data) => {
      const sortedData = sortByTitle(data)
      setAmazon(data)
      console.log(data)
    })
  }, [])

 const sortByTitle = (array) => {
  return array.sort((a,b) => {
    const textA = a.name.toUpperCase()
    const textB = b.name.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  })
 }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Price</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {
          amazon.map((item, index) => {
            return (
              <tr>
                {<td>{ item.price }</td>}
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

