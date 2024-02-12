import { ParagraphSmall } from "baseui/typography";
import { FC } from "react";
import { ArrowUpIcon } from "../../icons";
import { getRedirectOverrides } from "../overrides";
import { useStyletron } from "styletron-react";
import { styles as s } from "../styles";
import { RedirectProps } from "../types";
import { isExternalLink } from "../../../shared/utils/isExternalLink";

const Redirect: FC<RedirectProps> = ({ redirectPath, redirectTitle }) => {
  const [css] = useStyletron();
  const isExternal = isExternalLink(redirectPath);

  return (
    <a
      href={redirectPath}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <ParagraphSmall overrides={getRedirectOverrides()}>
        <ArrowUpIcon className={css(s.iconStyles)} />
        {redirectTitle}
      </ParagraphSmall>
    </a>
  );
};

export default Redirect;
