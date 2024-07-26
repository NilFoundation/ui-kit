import { useMemo } from "react";
import { BUTTON_KIND, BUTTON_SIZE, Button, ButtonProps } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import { PageElementProps, PaginationProps } from "./types";
import { useStyletron } from "baseui";

export const PageElement = ({
  page,
  linkMapper,
  pageHandler,
  label,
  disabled,
  active,
  buttonSize,
}: PageElementProps) => {
  const buttonProps: ButtonProps = {
    disabled,
    kind: active ? BUTTON_KIND.primary : BUTTON_KIND.secondary,
    size: buttonSize,
  };
  if (pageHandler) {
    buttonProps.onClick = (e) => {
      e.preventDefault();
      pageHandler(page);
    };
  }
  if (linkMapper && !disabled) {
    return (
      <li>
        <a
          href={linkMapper(page)}
          onClick={(e) => {
            e.preventDefault();
            if (pageHandler) pageHandler(page);
          }}
          aria-label={`${active ? "Current Page, " : ""}Page ${page}`}
          aria-current={active}
        >
          <Button tab-index={-1} {...buttonProps}>
            {label ?? page}
          </Button>
        </a>
      </li>
    );
  }
  return (
    <Button {...buttonProps} aria-label={`${active ? "Current Page, " : ""}Page ${page}`} aria-current={active}>
      {label ?? page}
    </Button>
  );
};

export const Pagination = ({
  currentPage,
  totalPages,
  visiblePages = 3,
  pageHandler,
  linkMapper,
  buttonSize = BUTTON_SIZE.default,
}: PaginationProps) => {
  const [css] = useStyletron();

  const pages = useMemo(() => {
    const pages = [1];
    for (
      let i = Math.max(currentPage - visiblePages, 2);
      i <= Math.min(totalPages - 1, currentPage + visiblePages);
      i++
    ) {
      pages.push(i);
    }
    pages.push(totalPages);
    return pages;
  }, [currentPage, totalPages, visiblePages]);

  const elements = useMemo(() => {
    const elements = [];
    let prevPage = 1;
    for (const page of pages) {
      if (page - prevPage > 1) {
        elements.push(
          <Button kind={BUTTON_KIND.tertiary} size={buttonSize} disabled>
            ...
          </Button>
        );
      }
      elements.push(
        <li key={page} className="page-item">
          <PageElement
            page={page}
            linkMapper={linkMapper}
            pageHandler={pageHandler}
            active={page === currentPage}
            buttonSize={buttonSize}
          />
        </li>
      );
      prevPage = page;
    }
    return elements;
  }, [pages, pageHandler, linkMapper, currentPage, buttonSize]);

  return (
    <nav
      role="navigation"
      aria-label="Pagination navigation"
      className={css({
        display: "flex",
        flexDirection: "row",
      })}
    >
      <ul
        className={css({
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          gap: "8px",
        })}
      >
        <PageElement
          key="prev"
          disabled={currentPage === 1}
          page={currentPage - 1}
          label={<ChevronLeftIcon />}
          linkMapper={linkMapper}
          pageHandler={pageHandler}
          buttonSize={buttonSize}
        />
        {elements}
        <PageElement
          key="next"
          disabled={currentPage === totalPages}
          page={currentPage + 1}
          label={<ChevronRightIcon />}
          linkMapper={linkMapper}
          pageHandler={pageHandler}
          buttonSize={buttonSize}
        />
      </ul>
    </nav>
  );
};
