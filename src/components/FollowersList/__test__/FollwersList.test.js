import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        results: [
          {
            name: {
              first: "Laith",
              last: "Harb",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "ThePhonyGOAT",
            },
          },
        ],
      },
    }),
  },
}));

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  test("should render follower card", async () => {
    render(<MockFollowersList title="My Header" />);
    const followerItemElement = await screen.findByTestId("follower-item-0");
    expect(followerItemElement).toBeInTheDocument();
  });

  // test("should render multiple follower cards", async () => {
  //   render(<MockFollowersList title="My Header" />);
  //   const followerItemElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerItemElements.length).toBe(5);
  // });
});
