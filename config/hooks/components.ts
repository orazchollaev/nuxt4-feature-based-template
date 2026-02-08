export default function setupComponentNaming(components: any[]) {
  for (const component of components) {
    if (component.filePath.includes("/features/")) {
      const parts = component.filePath.split("/");
      const featureIndex = parts.findIndex((p) => p === "features");
      const featureName = parts[featureIndex + 1] as string;

      const pascalName = component.pascalName.replace(/^Components/, "");
      component.pascalName = `F${featureName.charAt(0).toUpperCase() + featureName.slice(1)}${pascalName}`;
      component.kebabName = `f-${featureName}-${pascalName
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .slice(1)}`;
    }
  }
}
