import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import Router from 'next/router';
import Link from 'next/link';

import {
	Background,
	Container,
	HeroImg,
	IconContainer,
	LandingText,
	CardSectionText,
	CardContainer,
	HeroImgLeft,
	ButtonContainer,
} from './styles';

import { Row, Col, Typography, Form, Input, Button } from 'antd';
import CardView from './card';

import { FiInstagram, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const { Title } = Typography;
const { Search } = Input;

function HomeContainer() {
	const [form] = Form.useForm();

	const onFinish = values => {
		console.log('Success:', values);

		// TODO: Add API endpoint.
	};

	return (
		<>
			<Background>
				<Container className={'p-3'} style={{ marginBottom: '25vh' }}>
					<Row>
						<Col md={24} lg={12} className={'p-xs-1 p-md-3 p-lg-5'}>
							<LandingText>
								Connect within your industry the right way with ease.
							</LandingText>
							<Title className={'mb-4'} level={4}>
								Collated housing listings, internship openings, networking and
								industry knowledge all in one.
							</Title>
							<Search
								placeholder="Enter a location or address."
								enterButton="Search"
								size="large"
								onSearch={value => console.log(value)}
							/>
							<Title level={4} className={'mt-5'}>
								Just browsing? Select your <a href="#">industry</a>.
							</Title>
						</Col>

						<Col xs={0} md={0} lg={12} className={'mt-5'}>
							<HeroImg src={'/svg/Landing/Hero-Images/people_SVG.svg'} />
						</Col>
					</Row>
				</Container>

				<Container className={'p-4'} style={{ marginBottom: '25vh' }}>
					<CardSectionText className={'mt-5 mb-5'}>
						Built to help start your career on the right foot.
					</CardSectionText>

					<CardContainer>
						<CardView
							title="Property Listings."
							imgUrl="/svg/Landing/Card-Images/Map_SVG.svg"
							description="We collate housing properties over multiple websites, allowing you to compare easily."
						/>

						<CardView
							title="Jobs Jobs Jobs!"
							imgUrl="/svg/Landing/Card-Images/Search_SVG.svg"
							description="Our large collection of job are being constantly updated with the newest openings, for all industries."
						/>

						<CardView
							title="Connect with others."
							imgUrl="/svg/Landing/Card-Images/Creative_process_SVG.svg"
							description="Find new roomates and make new connections in your industry with our networking solution."
						/>
					</CardContainer>

					<Row justify="center" className={'mt-3'}>
						<Button
							type={'primary'}
							size={'large'}
							className={'mt-3'}
							style={{ borderRadius: '10px' }}>
							Sign up and get started!
						</Button>
					</Row>
				</Container>

				<Container className={'p-3'} style={{ marginBottom: '25vh' }}>
					<Row>
						<Col xs={0} md={0} lg={12} className={'p-xs-1 p-md-3'}>
							<HeroImgLeft className={'mt-5'} src="/svg/Landing/Hero-Images/City_SVG.svg" />
						</Col>
						<Col md={24} lg={12} className={'p-xs-1 p-md-3'}>
							<LandingText className={'mb-4 mt-3'}>
								Curated content for multiple cities, and growing.
							</LandingText>
							<Title className={'mb-4'} level={4}>
								Our property listings and job openings are constantly updated
								with posts from sites like AirBnB, Zillow, Indeed, and many
								more.
							</Title>
							<Title level={3}>
								<a href="#">Search through our collections.</a>
							</Title>
							<ButtonContainer>
								<Button
									type={'primary'}
									size={'large'}
									style={{ borderRadius: '10px' }}
									className={'mt-3'}>
									Toronto
								</Button>
								<Button
									type={'primary'}
									size={'large'}
									style={{ borderRadius: '10px' }}
									className={'mt-3'}>
									Vancouver
								</Button>
								<Button
									type={'primary'}
									size={'large'}
									style={{ borderRadius: '10px' }}
									className={'mt-3'}>
									Waterloo
								</Button>
								<Button
									type={'primary'}
									size={'large'}
									style={{ borderRadius: '10px' }}
									className={'mt-3'}>
									Ottawa
								</Button>
								<Button
									type={'primary'}
									size={'large'}
									style={{ borderRadius: '10px' }}
									className={'mt-3'}>
									Montreal
								</Button>
								<Button
									type={'primary'}
									size={'large'}
									style={{ borderRadius: '10px' }}
									className={'mt-3'}>
									London
								</Button>
							</ButtonContainer>
						</Col>
					</Row>
				</Container>

				<Container style={{ marginBottom: '25vh' }}>
					<Row>
						<Col md={24} lg={12} className={'p-xs-1 p-md-3 p-lg-5'}>
							<Title
								style={{
									fontWeight: 'bold',
									fontSize: '80px',
								}}
								className={'mb-5 mt-3'}>
								No Fees.
							</Title>
							<Title className={'mb-5'} style={{ fontSize: '30px' }}>
								We want you to have the biggest advantage when entering the
								market, this means that we provide this service completely free.
							</Title>
							<Title className={'mb-5'} style={{ fontSize: '30px' }}>
								Donations
							</Title>
							<Title
								className={'mb-4'}
								style={{ fontWeight: 'lighter', fontSize: '25px' }}>
								We still accept donations! Any donations recieved will go into
								this website’s maintenence costs as well as buying our
								developers some drinks!
							</Title>
							<Button
								type={'primary'}
								size={'large'}
								style={{ borderRadius: '10px' }}
								className={'mt-3'}>
								Donate
							</Button>
						</Col>
						<Col xs={0} md={0} lg={12} className={'mt-5 p-xs-1 p-md-3 p-lg-5'}>
							<HeroImg src="/svg/Landing/Hero-Images/Investment_SVG.svg" />
						</Col>
					</Row>
				</Container>

				<Container className={'p-3 mb-5'}>
					<Row justify="center" style={{ textAlign: 'center' }}>
						<Col>
							<Title level={1} style={{ fontWeight: 'bold' }}>
								Any questions? Send us an email or message us on social media.
							</Title>
							<Title level={3} style={{ fontWeight: 'normal' }}>
								We don't bite, we promise!
							</Title>

							<Row justify="center" className={'m-lg-5 m-xs-1 m-md-3'}>
								<IconContainer>
									<IconContext.Provider
										value={{ size: '4em', style: { margin: 'auto 20px' } }}>
										<FiMail />
										<FiInstagram />
										<FiTwitter />
										<FiLinkedin />
									</IconContext.Provider>
								</IconContainer>
							</Row>
						</Col>
					</Row>
				</Container>
			</Background>
		</>
	);
}

export default HomeContainer;
