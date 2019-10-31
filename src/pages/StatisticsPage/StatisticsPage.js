import React from 'react';
import Statistics from '../../components/Statistics/Statistics';

const StatisticsPage = () => <Statistics />;

export default StatisticsPage;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Chart from '../../components/Statistics/Chart/Chart';
// import Table from '../../components/Statistics/Table/Table';
// import Header from '../../components/Header/Header';
// import styles from '../../components/Statistics/Statistic.module.css';
// import BackButton from '../../components/BackButton/BackButtonContainer';
// import roleFilter from '../../helpers/roleFilter';

// class StatisticsPage extends Component {
//   rolesSum = (todayTomorrow, nextAfter, burnedOut, done) => {
//     const { today, tomorrow } = todayTomorrow;
//     const { next, after } = nextAfter;

//     const todayFiltered = roleFilter(today);
//     const tomorrowFiltered = roleFilter(tomorrow);
//     const nextFiltered = roleFilter(next);
//     const afterFiltered = roleFilter(after);
//     const burnedOutFiltered = roleFilter(burnedOut);
//     const doneFiltered = roleFilter(done);

//     const partnerSum =
//       todayFiltered.partner +
//       tomorrowFiltered.partner +
//       nextFiltered.partner +
//       afterFiltered.partner +
//       burnedOutFiltered.partner +
//       doneFiltered.partner;

//     const learnerSum =
//       todayFiltered.learner +
//       tomorrowFiltered.learner +
//       nextFiltered.learner +
//       afterFiltered.learner +
//       burnedOutFiltered.learner +
//       doneFiltered.learner;

//     const dotherSonSum =
//       todayFiltered.dotherSon +
//       tomorrowFiltered.dotherSon +
//       nextFiltered.dotherSon +
//       afterFiltered.dotherSon +
//       burnedOutFiltered.dotherSon +
//       doneFiltered.dotherSon;

//     const coWorkerSum =
//       todayFiltered.coWorker +
//       tomorrowFiltered.coWorker +
//       nextFiltered.coWorker +
//       afterFiltered.coWorker +
//       burnedOutFiltered.coWorker +
//       doneFiltered.coWorker;

//     const noneSum =
//       todayFiltered.none +
//       tomorrowFiltered.none +
//       nextFiltered.none +
//       afterFiltered.none +
//       burnedOutFiltered.none +
//       doneFiltered.none;

//     return (
//       [partnerSum, learnerSum, dotherSonSum, coWorkerSum, noneSum] || [
//         0,
//         0,
//         0,
//         0,
//         0,
//       ]
//     );
//   };

//   render() {
//     const { tasks } = this.props;
//     const { burnedOut, nextAfter, todayTomorrow, done } = tasks.tasks;
//     const screenWidth = document.documentElement.clientWidth;

//     return (
//       <>
//         <Header />
//         <div className={styles.outer}>
//           <div className={styles.inner}>
//             <h2 className={styles.pageName}>Statistics</h2>
//             <div className={styles.componentsWraper}>
//               <div className={styles.chartWraper}>
//                 <Chart data={done} />
//               </div>
//               <div className={styles.tableWraper}>
//                 <Table
//                   data={done}
//                   dataTotal={this.rolesSum(
//                     todayTomorrow,
//                     nextAfter,
//                     burnedOut,
//                     done,
//                   )}
//                 />
//               </div>
//             </div>
//             {screenWidth < 768 && <BackButton className={styles.button} />}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
// const mapStateToProps = state => ({ tasks: state });

// export default connect(
//   mapStateToProps,
//   null,
// )(StatisticsPage);
