import { render } from "preact";
import { App } from "./App";
import { LinkGenerator } from './components/LinkGenerator';

const path = window.location.pathname;
if (path === "/debug") {
    render(<LinkGenerator />, document.body);
} else {
    render(<App />, document.body);
}
