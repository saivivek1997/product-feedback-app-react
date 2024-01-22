import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

export const SidebarContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: var(--ghost-white-color);
  transition: all 0.5s;
  width: 250px;
  height: 100vh;
  padding: 24px;
`;

const Sidebar = ({ children }) => {
  return (
    <Overlay>
      <SidebarContainer>{children}</SidebarContainer>
    </Overlay>
  );
};

export default Sidebar;
