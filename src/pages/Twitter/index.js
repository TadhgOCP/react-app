import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import { Timeline } from 'react-twitter-widgets'

export function Twitter () {

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
