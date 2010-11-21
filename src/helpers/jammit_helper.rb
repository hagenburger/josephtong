require 'digest/md5'

module JammitHelper

  def javascripts(*packages)
    packages.map do |pack|
      if Jammit.package_assets
        digest = Digest::MD5.hexdigest(File.read("site" + Jammit.asset_url(pack, :js)))
        url = current_page_relative_path + Jammit.asset_url(pack, :js)[1..-1]
        %Q(<script src="#{url}?#{digest[0..6]}"></script>
)
      else
        Jammit.packager.individual_urls(pack.to_sym, :js).map do |file|
          url = file.gsub(%r(^.*site/), current_page_relative_path)
          %Q(<script src="#{url}"></script>
)
        end
      end
    end.join
  end
  alias include_javascripts javascripts

end
