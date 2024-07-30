import { useMemo } from "react";
import { BUTTON_KIND, BUTTON_SIZE, Button, ButtonProps } from "../button";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import { PageElementProps, PaginationProps } from "./types";
import { useStyletron } from "baseui";

const PageElement = ({ page, linkMapper, pageHandler, label, disabled, active, buttonSize }: PageElementProps) => {
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
          <Button tabIndex={-1} {...buttonProps}>
            {label ?? page}
          </Button>
        </a>
      </li>
    );
  }
  return (
    <li>
      <Button {...buttonProps} aria-label={`${active ? "Current Page, " : ""}Page ${page}`} aria-current={active}>
        {label ?? page}
      </Button>
    </li>
  );
};

export const Pagination = ({
  currentPage,
  totalPages,
  visiblePages = 7,
  pageHandler,
  linkMapper,
  buttonSize = BUTTON_SIZE.default,
}: PaginationProps) => {
  const [css] = useStyletron();

  const pages = useMemo(() => {
    if (visiblePages >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = [];
    let leftPages = visiblePages - 1; // minus current
    let startPage = currentPage;
    let endPage = currentPage;
    while (leftPages > 0) {
      if (startPage > 1) {
        startPage--;
        leftPages--;
      }
      if (endPage < totalPages) {
        endPage++;
        leftPages--;
      }
    }

    if (startPage > 1) {
      startPage += 2;
      pages.push(1);
    }

    if (endPage < totalPages) {
      endPage -= 2;
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    if (endPage < totalPages) {
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages, visiblePages]);

  const elements = useMemo(() => {
    const elements = [];
    let prevPage = 1;
    for (const page of pages) {
      if (page - prevPage > 1) {
        elements.push(
          <li>
            <Button kind={BUTTON_KIND.tertiary} size={buttonSize} disabled>
              ...
            </Button>
          </li>
        );
      }
      elements.push(
        <PageElement
          page={page}
          linkMapper={linkMapper}
          pageHandler={pageHandler}
          active={page === currentPage}
          buttonSize={buttonSize}
        />
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
