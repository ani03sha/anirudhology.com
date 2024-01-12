import { useTranslation } from "next-i18next";

export function ShortDescription() {
    let { t } = useTranslation("common");

    return (
        <div className="mb-8 mt-4">
            <p>{t("bio_journey")}</p>
            <p>{t("bio_motivation")}</p>
            <p>{t("bio_blog_purpose")}</p>
            <p>{t("bio_invitation")}</p>
        </div>
    );
}
