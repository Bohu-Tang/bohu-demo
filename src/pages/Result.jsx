import React, { Component } from 'react';
import styles from './result.less';
import { Button, Divider, Input } from 'antd';
import { router } from 'umi';

class Result extends Component {
  state = {
    time: '',
    val: ''
  };
  goHome = () => {
    router.push('/')
  }
  componentDidMount() {
    const { location: { state } } = this.props
    this.setState({
      time: state.time,
      val: state.val
    })
  }
  render() {
    return (
      <div className={styles.result}>
        <div className={styles.content}>
          <div className={styles.title}>TDD-测试驱动开发工程能力认证（初级）</div>

          <div className={styles.txt}>恭喜你完成了考试，本次考试用时{this.state.time},获得</div>
          <div className={styles.avatar}>
            <img src="https://avatars0.githubusercontent.com/u/45649856?s=460&v=4" />
          </div>


          <div className={styles.sub}>
            <Button type="primary" block onClick={() => {
              this.goHome()
            }}>
              初级
          </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Result