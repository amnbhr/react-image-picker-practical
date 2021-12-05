import React from "react";
import { render } from "@testing-library/react";

import ImagePicker from "./ImagePicker";

describe("ImagePicker", () => {
    test("renders the Button component", () => {
        render(<ImagePicker title="Hello world!" />);
    });
});
