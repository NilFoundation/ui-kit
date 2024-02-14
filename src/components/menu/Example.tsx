import Menu from "./Menu";

export const ITEMS_WITH_LINKS = [
  { label: "Item One", href: "/" },
  { divider: true },
  { label: "Item Two", href: "tel:0000000" },
  { label: "Item Three", linkComponent: "a", href: "/" },
];

export const Example = () => {
  return (
    <div>
      <Menu items={ITEMS_WITH_LINKS} />
    </div>
  );
};
