<script setup lang="ts">
import { marked } from 'marked'
const content = marked(
  `
# 独立开发中的 Git 流程模拟

如果你想在独立开发时模拟企业中的 Git 流程，可以按照以下步骤创建一个精简版的 Git Flow，帮助管理项目进度并体验真实项目中的 Git 流程。如果你想在独立开发时模拟企业中的 Git 流程，可以按照以下步骤创建一个精简版的 Git Flow，帮助管理项目进度并体验真实项目中的 Git 流程。
![Vue Logo](https://images.unsplash.com/photo-1498050108023-c5249f4df085 "Vue.js Logo")
---

## 建议的 Git 分支策略和流程

### 1. 创建开发分支（develop）
- 虽然你只有一个人在开发，但建议创建一个 \`develop\` 分支，作为主要的开发分支。
- 所有新功能的开发从 \`develop\` 开始，而 \`main\` 分支保持稳定，只用于发布版本。

\`\`\`bash
git checkout -b develop
\`\`\`

---

### 2. 功能分支（feature/xxx）
- 每个功能（或一个小模块）从 \`develop\` 分支上创建一个功能分支，命名为 \`feature/xxx\`，其中 \`xxx\` 是功能的描述。
- 在该分支上完成功能开发，确保功能独立于其他部分，便于管理和调试。

\`\`\`bash
git checkout -b feature/new-feature develop
\`\`\`

---

### 3. 开发和提交
- 在功能分支上开发时，定期进行本地提交。通过频繁的提交记录开发进展，并确保在问题发生时容易回溯。

\`\`\`bash
git add .
git commit -m "完成新功能的初步开发"
\`\`\`

---

### 4. 合并回 develop（功能完成时）
- 功能开发完成后，将 \`feature/new-feature\` 分支合并回 \`develop\` 分支。
- 在合并之前，可以用 \`git rebase develop\` 来确保分支基于最新的 \`develop\` 代码。

\`\`\`bash
git checkout develop
git pull origin develop  # 确保是最新的 develop 分支
git merge feature/new-feature
\`\`\`

---

### 5. 代码审核（自己模拟）
- 模拟真实的代码审查流程，合并功能分支之前，检查代码逻辑、优化点，确保符合最佳实践。

---

### 6. 删除功能分支
- 合并完成后，删除本地和远程的功能分支，保持仓库干净。

\`\`\`bash
git branch -d feature/new-feature  # 删除本地分支
git push origin --delete feature/new-feature  # 删除远程分支
\`\`\`

---

### 7. 准备发布（从 develop 合并到 main）
- 当代码稳定并准备发布时，将 \`develop\` 分支合并到 \`main\` 分支。\`main\` 分支应始终保持可部署的状态。

\`\`\`bash
git checkout main
git merge develop
git push origin main
\`\`\`

---

### 8. Hotfix 分支（可选）
- 如果在 \`main\` 中发现问题，或者生产环境遇到紧急 Bug，可以从 \`main\` 创建一个 \`hotfix\` 分支进行修复，完成后再合并回 \`main\` 和 \`develop\`。

\`\`\`bash
git checkout -b hotfix/urgent-fix main
# 修复bug
git checkout main
git merge hotfix/urgent-fix
git checkout develop
git merge hotfix/urgent-fix
\`\`\`

---

## 持续集成（可选）
- 如果想体验更真实的企业流程，可以配置 CI 工具（如 GitHub Actions），在每次提交或合并时自动执行测试脚本，确保代码质量。

通过这种方式，即使独立开发，也可以模拟真实项目中的 Git 流程，帮助更好地管理代码、提升开发效率。
`,
)
console.log(content)
</script>
<template>
  <div class="container">
    <div class="content" v-html="content"></div>
  </div>
</template>
<style scoped lang="scss">
.container {
  color: var(--color-text);
  background-color: var(--color-bg);
  border-radius: 0.8rem;
  .content {
    padding: 2rem;
    line-height: 2;
  }
}
</style>
