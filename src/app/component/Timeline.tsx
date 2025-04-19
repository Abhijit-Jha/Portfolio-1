import React from 'react'
import timelineData from './utils/timeline'
import { Timeline } from '@/components/ui/timeline'

const TimelineDisplay = () => {
    return (
        <Timeline data={timelineData} />
    )
}

export default TimelineDisplay
