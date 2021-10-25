import React from 'react'
import LargeLineGraph from '../LargeLineGraph/LargeLineGraph'

const GoogleDriveChart = (props) => {

    const { title, subtitle, labels, data, max, icon, hoverLabel } = props;

    return (
        <>
        <LargeLineGraph title={title} subtitle={subtitle} labels={labels} data={data} max={max} icon={icon} hoverLabel={hoverLabel}/>
        </>
    )
}

export default GoogleDriveChart
