import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "./atoms";

const Head = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  transition: transform 0.1s linear;
  &:hover {
    transform: perspective(10000px) translate3d(-5px, 0, 10px);
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.accentColor};
`;

interface IHeaderProps {
  title?: string;
  goBack: boolean;
}

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #2196f3;
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

function HeaderTitle({ title, goBack }: IHeaderProps) {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Head>
      {goBack ? (
        <Link to="/">
          <IconContainer
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon className="fa-2x" icon={faArrowCircleLeft} />
          </IconContainer>
        </Link>
      ) : (
        <div></div>
      )}
      <Title>{title ? title : "loading"}</Title>
      <Label>
        <Input onClick={toggleDarkAtom} />
        <Span />
      </Label>
    </Head>
  );
}

export default HeaderTitle;
