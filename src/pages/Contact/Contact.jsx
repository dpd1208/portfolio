import React, { useState } from 'react';
import ThemeProvider from '../../ThemeProvider/provider';
import {
	SectionWrapper,
	DescriptionWrapper,
	Title,
	Tagline,
	FormWrapper,
	StyledForm,
	InputWrapper,
	StyledInput,
	StyledTextArea,
	StyledButton,
	Message,
} from './Contact.styled';

const Contact = ({ testId, className, themeName }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [body, setBody] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (event, inputType) => {
		switch (inputType) {
			case 'name':
				setName(event.target.value);
				break;
			case 'email':
				setEmail(event.target.value);
				break;
			case 'body':
				setBody(event.target.value);
				break;
		}
	};

	const subject = `A message from ${name}`;
	const emailBody = `${body} \n` + `\n Contact Address: ${email}`;

	const sendMail = () => {
		const link =
			'mailto:dpd1208@gmail.com' +
			'?subject=' +
			encodeURIComponent(subject) +
			'&body=' +
			encodeURIComponent(emailBody);
		window.location.href = link;
	};

	const handleSubmit = async () => {
		await sendMail();
		setSubmitted(true);
	};

	return (
		<ThemeProvider theme={themeName}>
			<SectionWrapper
				className={className}
				data-test-id={testId && `${testId}-contact`}
			>
				<DescriptionWrapper>
					<Title>Contact</Title>
				</DescriptionWrapper>
				{submitted ? (
					<Message>Thank you!</Message>
				) : (
					<FormWrapper>
						<Tagline>GOT QUESTIONS?</Tagline>
						<StyledForm onSubmit={handleSubmit}>
							<InputWrapper className="mb-3 pt-0">
								<StyledInput
									onChange={e => handleChange(e, 'name')}
									type="text"
									placeholder="YOUR NAME"
									name="name"
									className="name"
									required
								/>
							</InputWrapper>
							<InputWrapper className="mb-3 pt-0">
								<StyledInput
									onChange={e => handleChange(e, 'email')}
									type="email"
									placeholder="EMAIL"
									name="email"
									className="email"
									required
								/>
							</InputWrapper>
							<InputWrapper className="mb-3 pt-0">
								<StyledTextArea
									onChange={e => handleChange(e, 'body')}
									placeholder="YOUR MESSAGE"
									name="message"
									className="body"
									required
								/>
							</InputWrapper>
							<InputWrapper className="mb-3 pt-0">
								<StyledButton className="button" type="submit">
									Send a message
								</StyledButton>
							</InputWrapper>
						</StyledForm>
					</FormWrapper>
				)}
			</SectionWrapper>
		</ThemeProvider>
	);
};

export default Contact;
