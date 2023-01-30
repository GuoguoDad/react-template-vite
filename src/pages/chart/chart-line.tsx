import React from 'react'
import defaultImg from '@img/default_goods.png'
import styles from './chartLine.module.less'
import './index.less'

const ChartLine = () => {
  return (
    <div>
      ChartLine
      <img src={defaultImg} className={styles.img} />
      <img src={defaultImg} className="img2" />
    </div>
  )
}

export default ChartLine
