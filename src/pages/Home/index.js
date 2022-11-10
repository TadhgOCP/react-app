import { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import { Timeline } from 'react-twitter-widgets'

export function Home () {

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/my-endpoint`)
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
          screenName: 'BBCNews'
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
          screenName: 'rtenews'
        }}
        options={{
          height: '600'
        }}
      />
      </Row>
  </>
  )
}
