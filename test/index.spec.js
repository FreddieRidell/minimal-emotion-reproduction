import React from "react";
import { renderToString } from 'react-dom/server'
import styled from "@emotion/styled";

const Foo = styled.div({
	backgroundColor: "red",
	color: "blue"
});

it("outputs css", () => {
	expect(
		renderToString(<Foo />)
	).toBe('<style data-emotion-css="1mo1rcx">.css-1mo1rcx{background-color:red;color:blue;}</style><div class="css-1mo1rcx"></div>')
})
