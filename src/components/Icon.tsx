import * as React from "react";
import styled from "styled-components"

const icons = [
    {
        "name": "close",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 19 0 C 19.552 0 20 0.448 20 1 L 20 1 C 20 1.552 19.552 2 19 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" transform="translate(2 11) rotate(45 10 1)" fill="#FFFFFF"></path><path d="M 0 1 C 0 0.448 0.448 0 1 0 L 19 0 C 19.552 0 20 0.448 20 1 L 20 1 C 20 1.552 19.552 2 19 2 L 1 2 C 0.448 2 0 1.552 0 1 Z" transform="translate(2 11) rotate(-45 10 1)" fill="#FFFFFF"></path></svg>
    },
    {
        "name": "heart",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 8.5 10 L 12 13.5 L 15.5 10" fill="transparent" stroke-width="8" stroke="#FFFFFF" stroke-linecap="round"></path></svg>
    },
    {
        "name": "progress",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 7.582 20 4 16.418 4 12 C 4 7.582 7.582 4 12 4 Z" fill="transparent" stroke-width="2" stroke="#FFFFFF" stroke-linecap="round" stroke-dasharray="38"></path></svg>
    },
    {
        "name": "home",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 11.412 4.427 C 11.763 4.172 12.237 4.172 12.588 4.427 L 19.19 9.224 C 19.452 9.415 19.606 9.721 19.602 10.045 L 19.512 17.512 C 19.505 18.06 19.06 18.5 18.512 18.5 L 18 18.5 C 17.448 18.5 17 18.052 17 17.5 L 17 13 C 17 12.448 16.552 12 16 12 L 14 12 C 13.448 12 13 12.448 13 13 L 13 17.5 C 13 18.052 12.552 18.5 12 18.5 L 5.488 18.5 C 4.94 18.5 4.495 18.06 4.488 17.512 L 4.398 10.045 C 4.394 9.721 4.548 9.415 4.81 9.224 Z" fill="#FFFFFF"></path></svg>
    },
    {
        "name": "settings",
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M 13.597 4.427 C 13.825 5.549 15.274 5.858 15.935 4.926 C 16.321 4.383 17.17 4.763 17.027 5.415 C 16.78 6.532 17.979 7.408 18.96 6.827 C 19.532 6.488 20.155 7.182 19.76 7.719 C 19.082 8.639 19.823 9.929 20.954 9.799 C 21.614 9.724 21.902 10.613 21.324 10.941 C 20.332 11.505 20.487 12.986 21.573 13.33 C 22.207 13.531 22.11 14.461 21.449 14.525 C 20.315 14.634 19.857 16.051 20.71 16.809 C 21.207 17.251 20.742 18.061 20.113 17.849 C 19.032 17.486 18.041 18.592 18.514 19.634 C 18.789 20.242 18.037 20.791 17.547 20.34 C 16.707 19.567 15.354 20.172 15.364 21.317 C 15.369 21.985 14.46 22.179 14.195 21.567 C 13.741 20.517 12.259 20.517 11.805 21.567 C 11.54 22.179 10.631 21.985 10.636 21.317 C 10.646 20.172 9.293 19.567 8.453 20.34 C 7.963 20.791 7.211 20.242 7.486 19.634 C 7.959 18.592 6.968 17.486 5.887 17.849 C 5.258 18.061 4.793 17.251 5.29 16.809 C 6.143 16.051 5.685 14.634 4.551 14.525 C 3.89 14.461 3.793 13.531 4.427 13.33 C 5.513 12.986 5.668 11.505 4.676 10.941 C 4.098 10.613 4.386 9.724 5.046 9.799 C 6.177 9.929 6.918 8.639 6.24 7.719 C 5.845 7.182 6.468 6.488 7.04 6.827 C 8.021 7.408 9.22 6.532 8.973 5.415 C 8.83 4.763 9.679 4.383 10.065 4.926 C 10.726 5.858 12.175 5.549 12.403 4.427 C 12.535 3.773 13.465 3.773 13.597 4.427 Z M 7.253 13.028 C 7.253 16.219 9.826 18.805 13 18.805 C 16.174 18.805 18.747 16.219 18.747 13.028 C 18.747 9.838 16.174 7.252 13 7.252 C 9.826 7.252 7.253 9.838 7.253 13.028 Z" fill="#FFFFFF"></path></svg>
    }
]

var iconNames = []
for (var index = 0; index < icons.length; index++) {
    iconNames.push(icons[index].name)
}

const Container = styled.div`
    height: 44px;
    width: 44px;
    display: grid;
    align-items: center;
    justify-items: center;
`

// Define type of property
interface Props {
    name: string;
}

interface State {
    svg: any;
}

export class Icon extends React.Component<Props, State> {

    // Set default properties
    static defaultProps = {
        name: icons[0].name
    }

    state = {
        svg: icons[0].svg
    }

    render() {
        icons.map(icon => {
            if (icon.name == this.props.name)
                this.state.svg = icon.svg;
        })

        return <Container name={this.props.name}>{this.state.svg}</Container>;
    }
}

export default Icon