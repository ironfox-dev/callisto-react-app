import Row from 'components/Row'
import FooterSubtitle from 'components/FooterSubtitle'
import { Assets } from 'constants/images'
import { callisto, resources, social } from 'constants/strings'
import { Theme } from 'constants/theme'
import * as React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    padding: 10px;
    padding: 30px 10%;
    background-color: ${Theme.colors.footerbk};
    align-items: center;
    @media (max-width: 992px) {
        height: auto;
    }
`

const InputContainer = styled.div`
    margin: 0 25px;
    border: 1px solid white;
    width: 60%;
`

const Input = styled.input`
  font-size: 18px;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  color: ${Theme.colors.white};
  background-color: ${Theme.colors.footerbk};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    // color: ${Theme.colors.grey};
  }
  padding: 8px 10px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    // color: ${Theme.colors.grey};
  }
`
export const LinkStyledButton = styled.button<{ color: string }>`
  border: none;
  text-decoration: none;
  background-color: ${({color}) => color};
  padding: 10px 15px;
  font-weight: 500;
`
export const LinkStyledButton2 = styled.button<{ color: string }>`
  border: none;
  text-decoration: none;
  background-color: ${({color}) => color};
`

const Image = styled.div<{ img: string }>`
    background-image: ${({img}) => `url(${img})`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15px;
    width: 20px;
    background-repeat: no-repeat;
    background-size: contain;
`
const ImageSocial = styled.div<{ img: string }>`
    background-image: ${({img}) => `url(${img})`};
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    margin: 5px;
    background-repeat: no-repeat;
    background-size: contain;
`
const Text = styled.div<{ color: string, fontWeight: string }>`
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    font-family: ${Theme.fonts.body};
    font-size: 18px;
    line-height: 28px;
    opacity: .6;
    margin-left: -10px;
    letter-spacing: 1px;
`
const Footer = ({}) => {
    const [value, setValue] = React.useState("");

    const handleInput = (e) => {
        setValue(e.target.value);
    }
    return (
        <Container>
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <FooterSubtitle fontWeight={"700"} color={Theme.colors.white}>Subscribe to our newsletter for updates</FooterSubtitle>
                    <div className="row">
                        <InputContainer>
                            <Input
                                className="recipient-address-input"
                                type="text"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                placeholder={'Your email'}
                                pattern="^(0x[a-fA-F0-9]{40})$"
                                onChange={handleInput}
                                value={value}
                            />
                        </InputContainer>
                        <LinkStyledButton color={Theme.colors.primary}>
                            <Image img={Assets.arrow}></Image>
                        </LinkStyledButton>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <FooterSubtitle fontWeight={"700"} color={Theme.colors.white}>Join our community</FooterSubtitle>
                    <div className="row">
                        {
                            social?.map((_item, _i)=>{
                                return (
                                    <div className="" key={_item.name}>
                                        <ImageSocial img={_item.icon}  />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <FooterSubtitle fontWeight={"700"} color={Theme.colors.white}>Resources</FooterSubtitle>
                    {
                        resources?.map((_item, _i)=>{
                            return (
                                <div className="col-sm-12" key={_item.name}>
                                    <LinkStyledButton2 color={"transparent"} >
                                        <Text color={"#FEFFF8"} fontWeight={"300"}>{_item.name}</Text>
                                    </LinkStyledButton2>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-lg-3 col-sm-12">
                    <FooterSubtitle fontWeight={"700"} color={Theme.colors.white}>Callisto</FooterSubtitle>
                    {
                        callisto?.map((_item, _i)=>{
                            return (
                                <div className="col-sm-12" key={_item.name}>
                                    <LinkStyledButton2 color={"transparent"} >
                                        <Text color={"#FEFFF8"} fontWeight={"300"}>{_item.name}</Text>
                                    </LinkStyledButton2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

export default Footer
