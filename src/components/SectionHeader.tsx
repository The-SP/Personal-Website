/** Section marker: mint label, hairline rule, optional right-aligned count. */
const SectionHeader = ({
  label,
  trailing,
}: {
  label: string;
  trailing?: string;
}) => (
  <header className="flex items-baseline gap-4">
    <h2 className="section-label">{label}</h2>
    <span className="h-px flex-1 bg-rule" />
    {trailing && <span className="meta">{trailing}</span>}
  </header>
);

export default SectionHeader;
