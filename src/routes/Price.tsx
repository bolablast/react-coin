import styled from "styled-components";

const Container = styled.main`
  margin-top: 50px;
  height: 120px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const ValueNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
`;

const ValueContainter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Span = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${({ color }) => color};
`;

function Price({ priceInfo, beta }: any) {
  const coinHourArr = [
    priceInfo.percent_change_1h,
    priceInfo.percent_change_24h,
    priceInfo.percent_change_7d,
    priceInfo.percent_change_30d,
    priceInfo.percent_change_1y,
  ];
  const coinInfoArr = [
    priceInfo.market_cap,
    priceInfo.ath_price,
    priceInfo.volume_24h,
    `${priceInfo.market_cap_change_24h}%`,
    beta,
  ];
  return (
    <>
      <Container>
        <ValueNameContainer>
          <span>1h</span>
          <span>24h</span>
          <span>Week</span>
          <span>Month</span>
          <span>Year</span>
        </ValueNameContainer>
        <ValueContainter>
          {coinHourArr.map((item) => (
            <Span key={item} color={item > 0 ? "green" : "red"}>
              {item}%
            </Span>
          ))}
        </ValueContainter>
      </Container>
      <Container>
        <ValueNameContainer>
          <span>Market Cap</span>
          <span>All Time High</span>
          <span>Volume (24h)</span>
          <span>Vol /M Cap (24h)</span>
          <span>Beta</span>
        </ValueNameContainer>
        <ValueContainter>
          {coinInfoArr.map((item) => (
            <Span key={item} color="black">
              {item}
            </Span>
          ))}
        </ValueContainter>
      </Container>
    </>
  );
}

export default Price;
