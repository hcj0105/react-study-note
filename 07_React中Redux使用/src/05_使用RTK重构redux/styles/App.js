import styled from 'styled-components'

const AppWrapper = styled.div`
	.pages {
		display: flex;

		& > div {
			flex: 1;
			padding: 10px;
			border: 1px solid red;
		}
	}
`

export default AppWrapper
