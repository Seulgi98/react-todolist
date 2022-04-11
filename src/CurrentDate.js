import React from "react";
import styled from "styled-components";


class Clock extends React.Component {
  state = {
    date: new Date()
  }
  render() {
    const {date} = this.state;
    return (
      <div>
        <CurrentDateContainer>
          {date.getFullYear()}&nbsp;년&nbsp;{date.getMonth() + 1}&nbsp;월&nbsp;{date.getDate()}일
          <span style={{marginLeft:'10px'}}>
            {date.getDay() === 0
              ? "일요일"
              : date.getDay() === 1
                ? "월요일"
                : date.getDay() === 2
                  ? "화요일"
                  : date.getDay() === 3
                    ? "수요일"
                    : date.getDay() === 4
                      ? "목요일"
                      : date.getDay() === 5
                        ? "금요일"
                        : "토요일"}
          </span>
        </CurrentDateContainer>
      </div>
    );
  }
}
const CurrentDateContainer = styled.div`
`;

export default Clock;