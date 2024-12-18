export const openLinkInNewTab = (link : string) => {
    window.open(link);
}

export function getCssRootVar(varName: string): string {
    const rootStyles = getComputedStyle(document.documentElement);
    const value = rootStyles.getPropertyValue(varName).trim();
    return value;
  }
