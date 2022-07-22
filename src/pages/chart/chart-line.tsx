import React from 'react'
import styles from './chartLine.module.less'
import './index.less'

import defaultImg from '@img/default_goods.png'

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
