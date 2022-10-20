
import Row from 'react-bootstrap/Row';
import { Timeline } from 'react-twitter-widgets'

export function Home () {
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
