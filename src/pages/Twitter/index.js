import { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import { Timeline } from 'react-twitter-widgets'

export function Twitter () {

  useEffect(() => {
    fetch('http://localhost:8080/my-endpoint')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <>
      <Row>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'Cyborgeyes'
        }}
        options={{
          height: '600'
        }}
      />
      </Row>
      <Row>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'slime_machine'
        }}
        options={{
          height: '600'
        }}
      />
      </Row>
  </>
  )
}
