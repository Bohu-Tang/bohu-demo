import React, { Component } from 'react';
import styles from './start.less';
import { Button } from 'antd';
import { router } from 'umi';

class Start extends Component {
  state = {};
  goStart=()=>{
    router.push('/submit')
  }
  render() {
    return (
      <div className={styles.start}>
        <div className={styles.content}>
          <div className={styles.title}>TDD-测试驱动开发工程能力认证（初级）</div>
          <div className={styles.p1}>同学们好，欢迎参加TDD-测试驱动开发能力认证（初级）考试。</div>
          <div className={styles.p1}>在考试前请阅读操作说明：</div>
          <div className={styles.note}>
            <div className={styles.notice}>操作说明</div>
            <ul>
              <li>1-点击【开始考试】即可开始计时。</li>
              <li>2-开始考试后，请在考试页复制以下命令到电脑终端运行<br />命令示例：<span>cUrl -sSL http://123.123.123.123</span></li>
              <li>3-完成环境同步后，即可在项目中查看题目并在本地进行程序代码的编写；</li>
              <li>4-代码编写完成后提交代码到自己的仓库，在考试页填写项目地址，提交即可查看考试结果。</li>
              <li>准备好了就请【开始考试】吧~</li>
            </ul>
          </div>
        </div>
        <div className={styles.btn}>
          <Button type="primary" block onClick={()=>{
            this.goStart()
          }}>
            开始考试
          </Button>
        </div>
      </div>
    )
  }
}

export default Start