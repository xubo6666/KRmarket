<template>
  <div class="text-white" style="font-size: 13px">
    <h2>{{ t("community.title-1") }}</h2>
    <h2>{{ t("community.title-2") }}</h2>
    <div>
      {{ t("community.text-1") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-3") }}</h2>
    <h2>{{ t("community.title-4") }}</h2>
    <div>
      {{ t("community.text-2") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-5") }}</h2>
    <div>
      {{ t("community.text-3") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-6") }}</h2>
    <div>
      {{ t("community.text-4") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-7") }}</h2>
    <div>
      {{ t("community.text-5") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-8") }}</h2>
    <div>
      {{ t("community.text-6") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-9") }}</h2>
    <div>
      {{ t("community.text-7") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-10") }}</h2>
    <div>
      {{ t("community.text-8") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-11") }}</h2>
    <div>
      {{ t("community.text-9") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-12") }}</h2>
    <div>
      {{ t("community.text-10") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-13") }}</h2>
    <div>
      {{ t("community.text-11") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-14") }}</h2>
    <div>
      {{ t("community.text-12") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-15") }}</h2>
    <div>
      {{ t("community.text-13") }}
    </div>
    <div class="mt-5">
      {{ t("community.title-16") }}
    </div>
    <div>
      {{ t("community.text-14") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-17") }}</h2>
    <div>
      {{ t("community.text-15") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-18") }}</h2>
    <div>
      {{ t("community.text-16") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-19") }}</h2>
    <h2 class="mt-5">{{ t("community.title-20") }}</h2>
    <div>
      {{ t("community.text-17") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-21") }}</h2>
    <div>
      {{ t("community.text-18") }}
    </div>
    <h2 class="mt-5">{{ t("community.title-22") }}</h2>
    <div>
      {{ t("community.text-19") }}
    </div>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
};
</script>
