import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stat } from './stat'

export function Youtube () {

  const [viewCount, setViewCount] = useState('')
  const [subCount, setSubCount] = useState('')
  const [vidCount, setVidCount] = useState('')


  useEffect(() => {
    getData()
    const timer = setInterval(() => getData(), 5000)
    return () => clearInterval(timer)
  }, [])

  const getData = () => fetch('https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&key=AIzaSyDbGEpv8mrJa1TjyxDv1qoXuXW8odwNm0Q&id=UCURKbz7_kmJzlnBDrbWzpew')
    .then((response) => response.json())
    .then((data) => {
      const stats = data.items[0].statistics
      setViewCount(stats.viewCount)
      setSubCount(stats.subscriberCount)
      setVidCount(stats.videoCount)
    })

  return (
      <Container>
      <Row>
        <Col>
        <Stat
          label='View Count'
          value={viewCount} />
        </Col>
        <Col>
        <Stat
          label='Sub Count'
          value={subCount} />
        </Col>
        <Col>
        <Stat
        label='Vid Count'
        value={vidCount} />
        </Col>
      </Row>
    </Container>
  )
}
